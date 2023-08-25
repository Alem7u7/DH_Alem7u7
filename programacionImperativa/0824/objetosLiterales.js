let banco = {
    clientes: [{
            nroCuenta: 5486273622,
            tipoDeCuenta: "Cuenta Corriente",
            saldoEnPesos: 27771,
            titularCuenta: "Abigael Natte",
        },
        {
            nroCuenta: 1183971869,
            tipoDeCuenta: "Caja de Ahorro",
            saldoEnPesos: 8675,
            titularCuenta: "Ramon Connell",
        },
        {
            nroCuenta: 9582019689,
            tipoDeCuenta: "Caja de Ahorro",
            saldoEnPesos: 27363,
            titularCuenta: "Jarret Lafuente",
        },
        {
            nroCuenta: 1761924656,
            tipoDeCuenta: "Cuenta Corriente",
            saldoEnPesos: 32415,
            titularCuenta: "Ansel Ardley",
        },
        {
            nroCuenta: 7401971607,
            tipoDeCuenta: "Cuenta Unica",
            saldoEnPesos: 18789,
            titularCuenta: "Jacki Shurmer",
        }
    ],

    consultarCliente: function(nombre){

        for (let i = 0; i <= this.clientes.length; i++ ){
            
            if(banco.clientes[i].titularCuenta == nombre){
                console.log(banco.clientes[i])
                break;
            }
        }
    },

    deposito: function(nombre,cantidad){
        for (let i = 0; i <= this.clientes.length; i++ ){

            let saldoActual = this.clientes[i].saldoEnPesos;
            
            if(banco.clientes[i].titularCuenta == nombre){
                saldoActual = saldoActual + cantidad;
                this.clientes[i].saldoEnPesos = saldoActual;
                console.log('Depósito realizado, su nuevo saldo es: ' + saldoActual);
                break;
            }
        }

    },

    extraccion: function(nombre,cantidad){
        for (let i = 0; i <= this.clientes.length; i++ ){
            
            if(banco.clientes[i].titularCuenta == nombre){

                let saldoActual = this.clientes[i].saldoEnPesos;
                
                if( saldoActual - cantidad < 0){
                    console.log('Fondos Insuficientes');
                    break;
                }
                else if( saldoActual - cantidad >= 0 ){
                    saldoActual = saldoActual - cantidad;
                    this.clientes[i].saldoEnPesos = saldoActual;
                    console.log('Extracción realizada correctamente, su nuevo saldo es: ' + saldoActual)
                    break;
                }
            }
        }

    }


}


banco.deposito('Jacki Shurmer', 11854);

banco.consultarCliente('Jacki Shurmer');

banco.extraccion('Jacki Shurmer', 21854);