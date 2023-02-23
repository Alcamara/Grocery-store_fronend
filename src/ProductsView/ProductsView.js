import * as React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';



export default function ProductView() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({type:"FETCH_PRODUCTS"})
    },[])

const products = useSelector(store => store.products)

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
                <Button variant="contained" color='success'>Edit</Button>
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