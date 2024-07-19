function Counter (){ 
    //membuat variabel result 
    let result = 0;
    /**
     * membuat fungsi hendleClik 
     * dijalankan ketika button di klick 
     */
    function handleClik(){
         result = result +1
    }
    //menambahkan event click pada button 
    return (
        <div>
            <p>Result: {result}</p>
            <button onClick={{handleClik}>Add}></button>
        </div>
    );
}
export default Counter;