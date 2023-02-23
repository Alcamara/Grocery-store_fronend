import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
//dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//textfield
import TextField from '@mui/material/TextField';


export default function ProductView() {
    const [open, setOpen] = useState(false)
    const [sku, setSku] = useState('');
    const [description, setDescription] = useState({description:''});
    const [price, setPrice] = useState({price:''});
    const dispatch = useDispatch()



    useEffect(()=>{
        dispatch({type:"FETCH_PRODUCTS"})
    },[])

const products = useSelector(store => store.products)

const handleClickOpen = () =>{
    setOpen(true)
}

const handleClose = () =>{
    setOpen(false)
}

const updateDescription = ({ target }) => {
    setDescription(target.value);
  };

  const updateSku = ({ target }) => {
    setSku(target.value);
  };

  const updatePrice = ({ target }) => {
    setPrice(target.value);
  };

const table = (
    <div style={{padding:"60px 0", width: '60%', margin: "0 auto"}}>
        <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 250 }} aria-label=" table">
        <TableHead>
          <TableRow>
            <TableCell>SKU</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.sku}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.sku}
              </TableCell>
              <TableCell align="right">{product.description}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right" > 
              <Stack spacing={2} direction="row">
                <Button 
                    variant="contained" 
                    color='success'
                    onClick={()=>{
                        handleClickOpen()
                        setSku(product.sku.toString())
                        setDescription(product.description)
                        setPrice(product.price.toString())
                    }}
                >
                    Edit
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit Form</DialogTitle>
                    <DialogContent  >
                        <TextField 
                            fullWidth
                            value={sku}
                            onChange={updateSku} 
                            label='Sku'
                        />
                    </DialogContent>
                    <DialogContent  >
                        <TextField 
                            fullWidth 
                            value={description}
                            onChange={updateDescription}  
                            label='Description'
                        />
                    </DialogContent>
                    <DialogContent  >
                        <TextField 
                            fullWidth 
                            value={price}
                            onChange={updatePrice}  
                            label='Price'/>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={()=>{
                                dispatch({
                                    type:'UPDATE_PRODUCT',
                                    payload: {
                                        id: product.id,
                                        sku: parseInt(sku),
                                        description: description,
                                        price: parseFloat(price)
                                    }
                                })

                                handleClose()
                            }}
                        
                        >
                            Update
                        </Button>
                        <Button onClick={handleClose}>Canel</Button>
                    </DialogActions>
                </Dialog>
                <Button variant="outlined" color='error'>Delete</Button>
              </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>)

  return !products ? (<div>Loading</div>) : table
    
  
}