import styled from 'styled-components'

export const BgContainer = styled.div`
    display: flex;
    flex-direction: row;
`
export const LeftSide = styled.div`
    background-color: #ffc533;
    height: 100vh;
    width: 50%;
    padding: 10px;
`
export const InfoContainer = styled.div`
    background-color: #ffbf1f;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Info = styled.h1`
    font-family: 'Roboto';
    color: #272c47;
    font-size: 32px;
    font-weight: bold;
`
export const RightSide = styled.div`
    background-color:  #0f172a;
    height: 100vh;
    width: 50%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CounterHeading = styled.h1`
    font-family: 'Roboto';
    color: #ffbf1f;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 50px;
`
export const AddInputContainer = styled.form`
    display: flex;
    flex-direction: row;
`
export const Input = styled.input`
    height: 35px;
    width: 300px;
    border: 1px solid #272c47;
    padding-left: 10px;
    border-radius: 2px;
    margin-right: 10px;
    font-family: 'Roboto';
    color: #475569;
`
export const AddButton = styled.button`
    height: 35px;
    width: 80px;
    border-radius: 2px;
    background-color:  #ffc533;
    border: 0px;
    color: #272c47;
    font-family: 'Roboto';
    font-weight: bold;
    cursor: pointer;
`
export const UserInputsList = styled.ul`
    margin-top: 10px;
`
export const EmptyImage = styled.img`
    height: 500px;
    padding: 50px;
    margin-top: 50px;
    width: 100%;
`
