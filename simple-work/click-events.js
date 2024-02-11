document.getElementById('event_btn').addEventListener('click', function(){
    const defalutText = document.getElementById('default_text');
    defalutText.innerText = 'This text change by click event listener'
})

document.getElementById('input_btn').addEventListener('click', function(){
    const inputFild = document.getElementById('input_fild')
    const inputText = document.getElementById('input_text');
    inputText.innerText = inputFild.value;
    inputFild.value = '';
})