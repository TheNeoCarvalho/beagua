import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #7151bc;
`;

export const Texto = styled.Text`
  font-size: 22;
  color: #FFF ;
  padding: 5px;   
`;

export const TextoLista = styled.Text.attrs({
  numberOfLines: 1
})`
  font-size: 22;
  color: #000 ;
  padding: 5px;   
`;

export const Btn = styled.TouchableOpacity`
  background-color: transparent;
  padding: 5px;  
  border: 2px solid #fff;
  border-radius: 50
`;


export const Lista = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  background-color: #fff;
  width: 100%;
  padding: 5px;
  margin-top: 10px
`;