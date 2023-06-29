'use client'
import Input from '@/General/Input'
import InputSearch from '@/General/InputSearch'
import Label from '@/General/Label'
import Modal from '@/General/Modal'
import Section from '@/General/Section'
import Select from '@/General/Select'

const NATIONALITY = [
  {
    label: 'Perú',
    value: 'Perú'
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

export default function FormRental({ closeModal, isOpen }) {
  return (
    <Modal closeModal={closeModal} isOpen={isOpen}>
      <h1 className='mt-2 mb-4 text-2xl font-medium text-center text-white'>Alquilar habitacion</h1>
      <article className='grid items-center justify-center w-full h-20 grid-cols-3 py-4 mb-4 bg-gray-700 rounded-lg'>
        <div>
          <section className='flex gap-4 px-3'>
            <span className='text-gray-200 text-md'>Nro Habitacion: </span>
            <b className='text-gray-950 text-md'>0012</b>
          </section>
          <section className='flex gap-4 px-3'>
            <span className='text-gray-200 text-md'>Precio Total: </span>
            <b className='text-gray-950 text-md'>$1245.00</b>
          </section>
        </div>
        <div>
          <section className='flex gap-4 px-3'>
            <span className='text-gray-200 text-md'>Habitacitones: </span>
            <b className='text-gray-950 text-md'>2</b>
          </section>
          <section className='flex gap-4 px-3'>
            <span className='text-gray-200 text-md'>Precio Total: </span>
            <b className='text-gray-950 text-md'>$1245.00</b>
          </section>
        </div>

        <div>
          <section className='flex gap-4 px-3'>
            <span className='text-gray-200 text-md'>Habitacitones: </span>
            <b className='text-gray-950 text-md'>2</b>
          </section>
          <section className='flex gap-4 px-3'>
            <span className='text-gray-200 text-md'>Precio Total: </span>
            <b className='text-gray-950 text-md'>$1245.00</b>
          </section>
        </div>
      </article>
      <form className='space-y-6'>
        <article id='frmGuest'>
          <h3 className='mb-2 text-xl font-medium text-left text-white underline'>Registrar Cliente</h3>
          <Section cols={3}>
            <div className='col-span-2'>
              <Label label='Documento' className='text-sm text-white' htmlFor='typeDoc' />
              <InputSearch placeholder='Nro documento' />
            </div>
            <div>
              <Label label='Fecha Nacimiento' className='text-sm text-white ' htmlFor='birthDate' />
              <Input type='date' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' name='birthDate' />
            </div>
          </Section>
          <Section cols={3}>
            <div>
              <Label label='Nombre' className='text-sm text-white ' htmlFor='name' />
              <Input placeholder='Nombre' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' name='name' />
            </div>
            <div>
              <Label label='Apellido Paterno' className='text-sm text-white ' htmlFor='lastnameFath' />
              <Input placeholder='Apellido paterno' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' name='lastnameFath' />
            </div>
            <div>
              <Label label='Apellido Materno' className='text-sm text-white ' htmlFor='lastnameMoth' />
              <Input placeholder='Apellido materno' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' name='lastnameMoth' />
            </div>
          </Section>
          <Section cols={3}>
            <div>
              <Label label='Nacionalidad' className='text-sm text-white ' htmlFor='nationality' />
              <Select
                className='w-full py-2.5 rounded-lg focus:ring-0'
                required
                name='nationality'
                options={NATIONALITY}
              />
            </div>
            <div>
              <Label label='Telefono' className='text-sm text-white ' htmlFor='phone' />
              <Input placeholder='Numero telefono' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' name='phone' />
            </div>
            <div>
              <Label label='Correo' className='text-sm text-white ' htmlFor='email' />
              <Input placeholder='Correo electronico' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' name='email' />
            </div>
          </Section>
        </article>

        <article id='frmRoom'>
          <h3 className='mb-2 text-xl font-medium text-left text-white underline'>Registrar Habitacion</h3>
          <Section cols={2}>
            <div>
              <Label label='Fecha Entrada' className='text-sm text-white ' htmlFor='birthDate' />
              <Input type='datetime-local' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' name='birthDate' />
            </div>
            <div>
              <Label label='Fecha Salida' className='text-sm text-white ' htmlFor='birthDate' />
              <Input type='datetime-local' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' name='birthDate' />
            </div>
          </Section>
          <Section cols={2}>
            <div>
              <Label label='Pago Adelanto' className='text-sm text-white ' htmlFor='name' />
              <div class='flex'>
                <Input placeholder='Nombre' className='text-white bg-gray-600 rounded-l-lg focus:outline-none focus:ring-0' name='name' />
                <span title='Pago total' class='inline-flex items-center px-3 text-sm  border-l border-l-gray-700  rounded-r-md bg-gray-600 text-gray-300 font-bold'>
                  $1245.00
                </span>
              </div>
            </div>
            <div>
              <Label label='Pago Restante' className='text-sm text-white ' htmlFor='lastnameFath' />
              <Input placeholder='Apellido paterno' className='text-white bg-gray-600 rounded-lg focus:outline-none focus:ring-0' name='lastnameFath' />
            </div>
          </Section>

        </article>

        <div className='text-end'>
          <button type='button' className='focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 bg-green-600 hover:bg-green-700 focus:ring-green-800'>Reservar</button>
        </div>
      </form>

    </Modal>
  )
}
