// recupera o elemento do botão no DOM
let botaoResolver = document.querySelector('#botao-resolver');

// atrela uma função ao evento de 'click' do botão
botaoResolver.addEventListener(
    'click', 
    function() {
            //alert("Clicou no botão resolver!")
            var a = document.querySelector('#coeficiente-a').value
            if (parseInt(a)!==0) {    
                var b = document.querySelector('#coeficiente-b').value
                var c = document.querySelector('#coeficiente-c').value
                var delta = Math.pow(b,2)-4*a*c           
                document.querySelector('#resultado-delta').value=delta
                var x1=''
                var x2=''
                var qtdRaizesRaizes=0
                if(delta>=0){
                    var raizDelta=Math.sqrt(delta)
                    x1=(-b+raizDelta)/(2*a)
                    x2=(-b-raizDelta)/(2*a)
                    if(delta===0)
                        qtdRaizesRaizes=1
                    else
                        qtdRaizesRaizes=2
                }
                
                var parabola=''
                if(a>0)
                    parabola="Para cima"
                else 
                    parabola="Para baixo"
                var xVer=-b/(2*a)
                var yVer=-delta/(4*a)
                var vertice='('+xVer+','+yVer+')'
                document.querySelector('#resultado-x1').value=x1
                document.querySelector('#resultado-x2').value=x2
                document.querySelector('#resultado-qtd-raizes').value=qtdRaizesRaizes
                document.querySelector('#resultado-parabola').value=parabola
                document.querySelector('#resultado-vertice').value=vertice
            }else{
                alert("A igual a 0.")
                return
            }
        }
    );


