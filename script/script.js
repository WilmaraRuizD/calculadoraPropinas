
const convertir = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })

//   var value = 80000
// alert(convertir.format(value)) 

// let numer1=prompt("ingrese el dijito ");

// numer1=(convertir.format(numer1))

// alert(numer1 )


    function captura(){

        let valorCompra=document.getElementById("valorTotal").value ; //valorCompra ingresado en formulario
    
       let propina=document.getElementById("valorPropina").value ; //porcentaje de propina ingresado en formulario
    
        if  (!isNaN(valorCompra)){                            //se garantiza que en campo valorCompra se ingrese valores numericos

                
    
            if (!isNaN(propina)) {                 //y en el en campo propinas se ingrese valores numericos

    
                valorPropina=(valorCompra*propina)/100  //se aya valor monetario del porcentaje propina    



    
                total= parseInt( valorCompra) + parseInt(valorPropina)  //se gatantiza que se sumen los numeros parseInt
                let subt = document.getElementById('p1');
                subt.textContent=convertir.format(valorCompra);  

                let subt1=document.getElementById('p2');
                subt1.textContent=convertir.format(valorPropina);

                let subt2=document.getElementById('p3');
                subt2.textContent=convertir.format(total);;
        }
    }
        else{
            alert(`Ingrese valor valido: "Digitos"`)
            
        }
    
    
   }

   
 


    

