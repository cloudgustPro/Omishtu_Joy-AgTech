import Feed from '@components/Feed'
const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Omishtu-Joy
            <br className='maxx-md:hidden' />
            <span className='green_gradient text-center'>
                AgTech Engineering
            </span>
        </h1>

        <p className='desc text-center'>
        Omishtu-Joy is the best contemporary technology experience equipped diverse class tech staffs technology valley


        </p>
        <Feed />
    </section>
  )
}

export default Home;