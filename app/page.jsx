import Feed from '@components/Feed'
const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Discover and share
            <br className='maxx-md:hidden' />
            <span className='orange_gradient text-center'>
                with Prompt AI
            </span>
        </h1>

        <p className='desc text-center'>
            Prompt AI is a tool that you can dicover your prompt as well as its description and 
            give additional information about them 
        </p>
        <Feed />
    </section>
  )
}

export default Home;