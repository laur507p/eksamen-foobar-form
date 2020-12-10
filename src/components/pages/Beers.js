import React, { Component } from "react";


      const beers = [
        {
          name: "El Hefe",
          description: "The perfect beer",
          price: 65,
        },
        {
          name: "Ruined Childhood",
          description: "I cry",
          price: 60,
        },
        {
          name: "Githop",
          description: "Nerd alert",
          price: 65,
        },
        {
          name: "Mowintime",
          description: "Give me some soul sistah",
          price: 65,
        },
       
      
      ]
      
      export default class Beers extends Component {
      state = {
        cart:[],
      }
      
      add = (beer) => {
        this.setState(state => ({
          cart: [...state.cart, beer],
        }))
      }
      
      remove = (beer) => {
        this.setState(state => {
          const cart = [...state.cart];
          const productIndex = cart.findIndex(b => b.name === beer.name);
          if(productIndex < 0) {
            return;
          }
          cart.splice(productIndex, 1)
          return ({
            cart
          })
        })
      }
      
      currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
      
      getTotal = () => {
        const total = this.state.cart.reduce((totalCost, item) => totalCost + item.price,0);
        return total.toLocaleString(undefined, this.currencyOptions)
      }
      
      render() {
        return(
          <section className="screen" id="screen2">
              <a href="#screen3" className="testbutton">
            Next
            </a>
          <div className="wrapper">
              <div>
              Shopping Cart: {this.state.cart.length} total items.
              </div>
              <div>Total: {this.getTotal()}</div>
      
              <div>
            {beers.map(beer => (
              <div key={beer.name}>
                <div className="beer">
                  <p label={beer.name}>{beer.name}</p>
                  <p label={beer.price}>{beer.price}</p>
                </div>
                <button onClick={() => this.remove(beer)}>-</button>
                <span> 1 </span>
                <button onClick={() => this.add(beer)}>+</button>
                
                
              </div>
            ))}
          </div>
          </div>
          </section>
          )
       
      }
      }
      
      
      