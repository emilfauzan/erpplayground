import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden border m-5 p-5">
      <div className='grid grid-rows-1'>
        <h2 className='flex justify-center text-lg text-blue-400 font-black border-4 rounded-md p-5  border-orange-400 m-2'>alo</h2>
      </div>
      <div className='grid grid-rows-1'>
        <h2 className='flex justify-center text-lg text-orange-400 font-black border-4 rounded-md p-5 border-blue-400 m-2'>ola</h2>
      </div>
    </main>
  )
}
