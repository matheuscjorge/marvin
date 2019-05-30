import React from 'react';

// class Props extends Component {
//
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h3>Meu nome é {this.props.nome}</h3>
//         <br/>
//         <br/>
//         <h3>Tenho {this.props.idade} anos</h3>
//         <br/>
//         <br/>
//         <h3>Gosto de {this.props.atividade}</h3>
//       </div>
//     );
//   }
// }
const Props = ({ idade, nome, atividade }) => (
  <div>
    <h3>Meu nome é {nome}</h3>
    <br/>
    <br/>
    <h3>Tenho {idade} anos</h3>
    <br/>
    <br/>
    <h3>Gosto de {atividade}</h3>
  </div>
);

export default Props;
