import styled from '@emotion/styled';

export const ListItem = styled.li`
  width: 300px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 5px 5px #333;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding: 15px 25px;
`;

export const StatusMarker = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: ${props => {
    return props.status ? 'green' : 'red';
  }};
`;

export const UserAvatar = styled.img`
  margin-right: 15px;
`;

export const UserName = styled.p`
  font-size: 26px;
  margin: 0;
`;
