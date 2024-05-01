/* eslint-disable react/no-unescaped-entities */
import './App.css'

function App() {

  return (
    <>
    <header className='text-gray-700 border-b border-gray-200'>
      <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
        <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
          <span className='text-xl'>Kakuta Blog</span>
        </a>  
        <nav className='md:ml-auto text-base'>
          <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
          <a href="#about" className='mr-5 hover:text-blue-400 duration-300' >About</a>
          <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
          <a href="#blog" className=' hover:text-blue-400 duration-300'>Blog</a>
        </nav>
      </div>
    </header>

    <section className='text-gray-700' id='home'>
      <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
        <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
          <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>
            Hi! <br />
            I'm Kakuta <br />
            Web Developer
          </h1>
          <p className='mb-8 leading-relaxed'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates deleniti tempora quidem illum consequuntur quam odit quia unde autem mollitia?
          </p>
          <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact</button>
        </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src="./img/kakuta0915.png" alt="" />
        </div>
      </div>
    </section>

    {/* About Me */}
    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
          <p className='pb-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim neque harum minima laborum ipsa sed maxime repellendus aspernatur? Nulla!</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat excepturi velit voluptas commodi dolores dolor suscipit quae exercitationem explicabo. Cum mollitia consectetur ad non quisquam quidem. Deserunt, labore! Sint molestias iste esse doloremque labore repellendus magni voluptatum quia corporis quibusdam molestiae expedita dicta, illo tempora totam maiores natus explicabo quae! Inventore porro veniam nisi nam rem eligendi, perspiciatis vitae at! Labore totam sequi non mollitia sunt atque ea asperiores ab quidem, nam, voluptates soluta exercitationem fugit ipsam quaerat aspernatur repellat, voluptate cum quasi quo ex harum quis laudantium! Accusamus velit qui excepturi ea repellendus atque aliquam nihil eaque nobis.
          </p>
        </div>

        <div className='flex flex-wrap'>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-centner mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z"
                  fill="currentColor"
                />
              </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developer</h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque blanditiis quidem culpa libero suscipit hic eaque totam placeat corporis.
                </p>
                <a href="#" className='flex mt-3 text-green-500 items-center'>
                  More
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-centner mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z"
                  fill="currentColor"
                />
              </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developer</h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque blanditiis quidem culpa libero suscipit hic eaque totam placeat corporis.
                </p>
                <a href="#" className='flex mt-3 text-green-500 items-center'>
                  More
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-centner mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z"
                  fill="currentColor"
                />
              </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developer</h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque blanditiis quidem culpa libero suscipit hic eaque totam placeat corporis.
                </p>
                <a href="#" className='flex mt-3 text-green-500 items-center'>
                  More
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Skills */}
    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        {/* Left side */}
        <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
          <img src="./img/pc.jpg" alt="" width={500} height={300} className='rounded' />
        </div>
        {/* Right side */}
        <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
          <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
          <div>
            <h2>HTML</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "85%"}}>85%</div>
            </div>
            <h2>CSS</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "75%"}}>75%</div>
            </div>
            <h2>Java Script</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "65%"}}>65%</div>
            </div>
            <h2>HTML</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "85%"}}>85%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
      )
}

export default App
