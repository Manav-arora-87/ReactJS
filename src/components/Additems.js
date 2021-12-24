import React from 'react';
 
class Additems extends React.Component {
  constructor(props){
    super(props);
    this.state={
      productname:"",
      productprice:"",
    }

  }

    render() { 
        return( 
         <form className="row mb-5" onSubmit={(e)=>{ e.preventDefault();this.props.additem(this.state.productname,Number(this.state.productprice))}}>
        <div className="mb-3 col-4">
          <label htmlFor="inputname" className="form-label">Product Name</label>
          <input type="text" name="productname" className="form-control" id="inputname" aria-describedby="name" onChange={(e)=>{ this.setState({productname:e.currentTarget.value})}} value={this.state.productname}  />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputprice" className="form-label">Product price</label>
          <input type="number" name="productprice" className="form-control" id="inputprice"  onChange={(e)=>{ this.setState({productprice:Number(e.currentTarget.value)});}} value={this.state.productprice}  />
        </div>
        
        <button  type="submit" className="btn mt-4 btn-primary col-3 " style={{height:40}} >Add</button>
      </form>
        );
    }
}
 
export default Additems;