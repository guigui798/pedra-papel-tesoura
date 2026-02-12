 var placar=JSON.parse(localStorage.getItem('valores')) || {ganhou:0, empatou:0, perdeu:0};
        function score(){
            if(sim==='g'){
                placar.ganhou++;
                document.getElementById('result').innerText=(`computador pegou ${resultado}, você ganhou`);
            }
            else if(sim ==='e'){
                placar.empatou++;
                document.getElementById('result').innerText=(`computador pegou ${resultado}, você empatou`);
            }
            else if(sim === 'p'){
                placar.perdeu++;
                document.getElementById('result').innerText=(`computador pegou ${resultado}, você perdeu`);
            }
            localStorage.setItem('valores', JSON.stringify(placar));
            console.log(localStorage.getItem('valores'));
            document.getElementById('ganhos').innerText= (`${placar.ganhou}`);
            document.getElementById('perdas').innerText= (`${placar.perdeu}`);
            document.getElementById('empates').innerText= (`${placar.empatou}`);
        }
        function reset(){
            placar.ganhou=0;
            placar.perdeu=0;
            placar.empatou=0;
            document.getElementById('ganhos').innerText= (`${placar.ganhou}`);
            document.getElementById('perdas').innerText= (`${placar.perdeu}`);
            document.getElementById('empates').innerText= (`${placar.empatou}`);
            localStorage.removeItem('valores');
        }
         var resultado='';
        function pickRandomNumber(){
            var aleatorio = Math.random();
            if(aleatorio>=0 && aleatorio<=1/3){
                resultado='pedra';
            }
            else if(aleatorio>1/3 && aleatorio<=2/3){
                resultado='papel';
            }
            else if(aleatorio>2/3 && aleatorio<=1){
                resultado='tesoura';
            }
        }