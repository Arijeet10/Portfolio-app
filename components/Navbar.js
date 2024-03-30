const Navbar = () => {
    return ( 
        <>
            <div className="flex items-center justify-between">
                <div className="text-5xl font-extrabold flex items-center">SARKAR <span className="text-green-500 text-base">○</span></div>
                <div>
                    <img 
                        src="/menu-burger.png"
                        alt="options icon"
                        className="w-10 h-10"
                    />
                </div>
            </div>
        </>
     );
}
 
export default Navbar;