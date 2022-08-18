import "./Form.css"

export default function Form() {
    return(
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap justify-center items-center mx-auto">
                    <a href="#" className="flex items-center">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/> */}
                    <span className="nav-title self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dynamic Form Builder</span>
                    </a>
                </div>
            </nav>
            <div style={{height: "90.7vh"}} className="grid grid-cols-4">
                <div className="elements pt-5">
                    <div className="grid grid-cols-2 px-8">
                        <div className="col-span-2 text-end">
                            <button >
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#ffffffc2" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div style={{color:"#ffffffc2"}} className="col-span-2 elements-title mb-4 px-8 text-center text-3xl">Fields</div>
                    </div>
                    <hr style={{borderColor: "#0000003b"}} className="mb-7"></hr>

                    <div className="flex px-8 gap-4 items-end pt-10 mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="elements-icon bi bi-fonts" viewBox="0 0 16 16">
                            <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z"/>
                        </svg>
                        <p style={{color:"#ffffffc2"}} className="col-span-5 text-white text-2xl">Text</p>
                    </div>

                    <div className="flex px-8 gap-4 items-end mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="elements-icon bi bi-input-cursor-text" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.165 4.165 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.49 3.49 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.165 4.165 0 0 1-2.06-.566A4.561 4.561 0 0 1 8 13.65a4.561 4.561 0 0 1-.44.285 4.165 4.165 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.49 3.49 0 0 0-.436-.294A3.166 3.166 0 0 0 5.5 2.5.5.5 0 0 1 5 2z"/>
                            <path d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v1zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4z"/>
                        </svg>
                        <p style={{color:"#ffffffc2"}} className="col-span-5 text-white text-2xl">Text Input</p>
                    </div>

                    <div className="flex px-8 gap-4 items-center mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="elements-icon bi bi-record-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        </svg>                        
                        <p style={{color:"#ffffffc2"}} className="col-span-5 text-white text-2xl">Radio Button</p>
                    </div>

                    <div className="flex px-8 gap-4 items-center mb-8">
                        <svg className="elements-icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"/>
                        </svg>                        
                        <p style={{color:"#ffffffc2"}} className="col-span-5 text-white text-2xl">Checkbox</p>
                    </div>

                    <div className="flex px-8 gap-4 items-center mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="elements-icon bi bi-menu-button-wide-fill" viewBox="0 0 16 16">
                            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                        </svg>                        
                        <p style={{color:"#ffffffc2"}} className="col-span-5 text-white text-2xl">Select Input</p>
                    </div>

                    <div className="flex px-8 gap-4 items-center mb-8">
                        <div className="elements-icon"><img className="button" width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/button2.png"/></div>
                        <p style={{color:"#ffffffc2"}} className="col-span-5 text-white text-2xl">Button</p>
                    </div>

                    
                </div>

                <div className="flex flex-col justify-center items-center col-span-3">
                    <div className="w-full max-w-xl">
                        <form className="bg-white shadow-md rounded mb-4">
                            <div className="mb-7 px-8 pt-6 text-center text-3xl">Form Title</div>
                            <hr></hr>
                            <main className="px-8 pb-8">
                                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                                <div className="px-4 py-6 sm:px-0">
                                    <div className="border-4 flex items-center justify-center border-dashed border-gray-200 rounded-lg h-56">
                                        <div className=" flex items-center justify-center gap-3 font-thin text-gray-500 text-2xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                            </svg>
                                            Drag and Drop your elements here
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </main>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}