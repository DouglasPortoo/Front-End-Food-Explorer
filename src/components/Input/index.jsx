/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Input({ icon: Icon,data,datalisId, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      {data && 
      <datalist id={datalisId}>
        {data.map((data,index)=>(
          <option key={index}>{data}</option>
        ))}
        </datalist> 
        }
      <input {...rest} />
    </Container>
  );
}
