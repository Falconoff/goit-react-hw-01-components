import styled from '@emotion/styled';

export const Card = styled.div`
  width: 200px;
  background-color: #fff;
  font-size: 14px;
  margin: 50px auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  & > p {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

export const Avatar = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #000;
`;

export const UserTag = styled.p`
  color: #88f;
`;
export const UserLocation = UserTag;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-between;

  & > li {
    flex-basis: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(190, 208, 247);
    padding: 10px;
    border: 1px solid #aaa;
  }
`;

export const StatsItemName = styled.span`
  font-size: 12px;
`;
export const StatsItemQuantity = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
