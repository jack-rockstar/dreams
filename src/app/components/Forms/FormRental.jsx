'use client'
import { DateTime } from 'luxon'
import { useRef, useState } from 'react'

import DetailsRoom from '@/DetailsRoom/DetailsRoom'
import Input from '@/General/Input'
import InputSearch from '@/General/InputSearch'
import Label from '@/General/Label'
import Modal from '@/General/Modal'
import Section from '@/General/Section'
import Select from '@/General/Select'
import Title from '@/General/Title'
import useGuest from '@/useGuest'
import useRental from '@/useRental'
import { ImSpinner8 } from 'react-icons/im'
import Swal from 'sweetalert2'

const NATIONALITY = [
  {
    label: 'Perú',
    value: 'PE'
  },
  {
    label: 'Argentina',
    value: 'Argentina'
  },
  {
    label: 'Brazil',
    value: 'Brazil'
  }
]

const TIPO_PAGO = [
  {
    label: 'PAGAR TODO',
    value: 'PT'
  },
  {
    label: 'PAGAR ADELANTO',
    value: 'PA'
  }
]

export default function FormRental({ closeModal, isOpen, room }) {
  const date = DateTime.local()
  const [loadings, setLoadings] = useState({ search: false, rental: false })
  const [doc, setDoc] = useState({ typeDoc: 'DNI', numberDoc: '' })
  const [tipoPago, setTipoPago] = useState('PT')
  const { getGuestByDocument } = useGuest()
  const { addRental } = useRental()
  const [dataClient, setDataClient] = useState(null)
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoadings((prev) => ({
      ...prev,
      rental: true
    }))
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    const request = {
      ...data,
      roomId: room.id,
      guestId: dataClient?.id,
      admissionDate: data.entryDate.replace('T', ' '),
      departureDate: data.departureDate.replace('T', ' '),
      fullPayment: room.priceRoom
    }

    const { status } = await addRental({ request })
    setLoadings((prev) => ({
      ...prev,
      rental: false
    }))
    if (!status) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'No se pudo realizar la reserva.',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se realizo la reserva correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    setDataClient(null)
    formRef.current.reset()
    closeModal()
  }

  const handleSearch = async (doc) => {
    setLoadings((prev) => ({
      ...prev,
      search: true
    }))
    const { status, data: guest } = await getGuestByDocument(doc)
    setLoadings((prev) => ({
      ...prev,
      search: false
    }))
    if (!status) {
      console.log(`Cliente no encontrado, ${JSON.stringify(guest)}`)
      setDataClient(null)
      return
    }
    setDataClient(guest.data)
  }

  const fechaNacimiento = dataClient ? DateTime.fromISO(dataClient.birthDate).toUTC().toFormat('yyyy-MM-dd') : ''

  return (
    <Modal closeModal={closeModal} isOpen={isOpen}>
      <Title>Alquilar habitacion</Title>
      <DetailsRoom room={room} />
      <form ref={formRef} className='space-y-6' onSubmit={handleSubmit}>
        <article id='frmGuest'>
          <h3 className='mb-2 text-xl font-medium text-left text-white underline'>Registrar Cliente</h3>
          <Section cols={3}>
            <div className='col-span-2'>
              <Label label='Documento' className='text-sm text-white' htmlFor='typeDoc' />
              <InputSearch loading={loadings.search} searchButton={() => handleSearch(doc)} setValue={setDoc} placeholder='Nro documento' />
            </div>
            <div>
              <Label label='Fecha Nacimiento' className='text-sm text-white ' htmlFor='birthDate' />
              <Input defaultValue={fechaNacimiento} type='date' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0 ' required name='birthDate' />
            </div>
          </Section>
          <Section cols={3}>
            <div>
              <Label label='Nombre' className='text-sm text-white ' htmlFor='name' />
              <Input defaultValue={dataClient?.name} placeholder='Nombre' required className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' name='name' />
            </div>
            <div>
              <Label label='Apellido Paterno' className='text-sm text-white ' htmlFor='lastnameFath' />
              <Input required defaultValue={dataClient?.patLastname} placeholder='Apellido paterno' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' name='matLastname' />
            </div>
            <div>
              <Label label='Apellido Materno' className='text-sm text-white ' htmlFor='lastnameMoth' />
              <Input required defaultValue={dataClient?.matLastname} placeholder='Apellido materno' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' name='patLastname' />
            </div>
          </Section>
          <Section cols={3}>
            <div>
              <Label label='Nacionalidad' className='text-sm text-white ' htmlFor='nationality' />
              <Select
                className='w-full py-2.5 rounded-lg focus:ring-0'
                required
                name='nationality'
                defaultValue={dataClient?.nationality}
                options={NATIONALITY}
              />
            </div>
            <div>
              <Label label='Telefono' className='text-sm text-white ' htmlFor='phone' />
              <Input defaultValue={dataClient?.phone} placeholder='Numero telefono' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' name='phone' />
            </div>
            <div>
              <Label label='Correo' className='text-sm text-white ' htmlFor='email' />
              <Input defaultValue={dataClient?.email} placeholder='Correo electronico' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' name='email' />
            </div>
          </Section>
        </article>

        <article id='frmRoom'>
          <h3 className='mb-2 text-xl font-medium text-left text-white underline'>Registrar Habitacion</h3>
          <Section cols={2}>
            <div>
              <Label label='Fecha Entrada' className='text-sm text-white ' htmlFor='birthDate' />
              <Input type='datetime-local' defaultValue={date.toFormat('yyyy-MM-dd HH:mm')} required name='entryDate' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' />
            </div>
            <div>
              <Label label='Fecha Salida' className='text-sm text-white ' htmlFor='birthDate' />
              <Input type='datetime-local' defaultValue={date.toFormat('yyyy-MM-dd HH:mm')} required name='departureDate' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' />
            </div>
          </Section>
          <Section cols={1}>
            <div>
              <Label label='Pago Adelanto' className='text-sm text-white ' htmlFor='name' />
              <div className='flex'>

                <Select
                  className='w-full py-2.5 rounded-l-lg focus:ring-0'
                  required
                  name='typePay'
                  onChange={(e) => setTipoPago(e.target.value)}
                  defaultValue={tipoPago}
                  options={TIPO_PAGO}
                />
                <Input name='paymentInAdvance' defaultValue={tipoPago === 'PT' ? room?.priceRoom : ''} required className='text-white bg-gray-600 focus:outline-none focus:ring-0' />
                <span title='Pago total' className='inline-flex items-center px-3 text-sm font-bold text-gray-300 border-l bg-rose-600 border-l-gray-700 rounded-r-md'>
                  ${room?.priceRoom}
                </span>
              </div>
            </div>
          </Section>

        </article>

        <div className='text-end'>
          <button type='submit' className='focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 bg-green-600 hover:bg-green-700 focus:ring-green-800'>
            {
              loadings.rental
                ? <ImSpinner8 className='text-white animate-spin' />
                : 'Reservar'
            }
          </button>
        </div>
      </form>

    </Modal>
  )
}
