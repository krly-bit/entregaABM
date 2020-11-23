const path=require('path')
const fs=require('fs')

const producto ={
    crear:function(req,res,next){
   
    res.render('producto')
    },
    agregar:function(req,res,next){
        

        let producto={};
        producto.id=req.body.id;
        producto.nombre=req.body.productName;
        producto.precio=req.body.precio;
        producto.descripcion=req.body.description;
        producto.marca=req.body.marca;
        producto.stock=req.body.stock;
        let datosJson=fs.readFileSync(path.resolve(__dirname, '../data/productos.json'), 'UTF-8');
        let productosArray=JSON.parse(datosJson);
       let buscarId= productosArray.filter(function(elemento){
           return elemento.id == producto.id;} )
           if (buscarId>0)
           {

        productosArray.push(producto);
        let productosNuevo=JSON.stringify(productosArray);
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), productosNuevo);
        res.send('Producto creado');  }
        else {res.send('ya existe un producto con el ID ingresado, ingresa un nuevo id')}      

    },
    editar:function (req, res, next){
        res.render('productoEditar')

    },
    modificar:function(req,res,next){

        let producto={};
        producto.id=req.body.id;
        producto.nombre=req.body.productName;
        producto.precio=req.body.precio;
        producto.descripcion=req.body.description;
        producto.marca=req.body.marca;
        producto.stock=req.body.stock;
        let datosJson=fs.readFileSync(path.resolve(__dirname, '../data/productos.json'), 'UTF-8');
        let productosArray=JSON.parse(datosJson);
      for(let i=0; i<productosArray.length; i++)
      { if(productosArray[i].id==producto.id)
        { 
          productosArray[i].nombre=producto.nombre;
          productosArray[i].precio=producto.precio;
          productosArray[i].descripcion=producto.descripcion;
          productosArray[i].marca=producto.marca;
          productosArray[i].stock=producto.stock; 
          let productosNuevo=JSON.stringify(productosArray);
          fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), productosNuevo);
          res.send('Tu producto ha sido modificado');    
        }
       
      }
      res.send('no se ha encontrado el producto');

       

    },
    eliminar: function(req, res, next) {
        res.render('eliminar')

    },

    quitar: function(req, res, next) {

        producto.id=req.body.id;
        let datosJson=fs.readFileSync(path.resolve(__dirname, '../data/productos.json'), 'UTF-8');
        let productosArray=JSON.parse(datosJson);
        for(let i=0; i<productosArray.length; i++)
        {
            if(producto.id==productosArray[i].id)
            { productosArray.splice(i,1);
            res.send('Producto eliminado')
            }
            




         }
         res.send('El producto no ha sido encontrado')

    }
}
module.exports=producto;