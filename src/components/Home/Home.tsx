import './Home.css';

export default function Home() {

  function addForm(e:any) {
    window.location.href = '/Create-Form'
  }

    return (
        <>
          <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
          <div className="container flex flex-wrap justify-center items-center mx-auto">
            <a href="#" className="flex items-center">
              {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/> */}
              <span className="nav-title self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dynamic Form Builder</span>
            </a>
          </div>
          </nav>

          <header style={{marginTop:"101px"}}>
            <div style={{marginBottom:"8px"}} className="flex justify-between items-center mt-10 max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl tracking-tight text-gray-900">Projects</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label htmlFor="default-checkbox" className="ml-2 text-sm text-gray-900 dark:text-gray-300">Select All</label>
                </div>
                <button className="delete-btn flex gap-2 bg-transparent text-black-700 py-2 px-2 border border-purple-500 rounded">
                <svg fill="red" xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                  Delete Selected
                </button>
                <button onClick={addForm} className="create-form-btn flex gap-2 bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Create Form
                </button>
              </div>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto pb-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0">
                <div className="projects-bg bg-purple-500 rounded-lg h-96"></div>
              </div>
            </div>
          </main>
        </>
      );
}