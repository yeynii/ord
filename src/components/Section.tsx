import { myUnitsConfig, unitContext } from "@src/pages";
import Unit from "@src/unit/unit";
import { removeString } from "@src/utils/validator";
import { useContext, useMemo } from "react";
import styled from "styled-components";

interface SectionProps {
  type: string;
}

const Section = ({ type }: SectionProps) => {
  const { myUnits, setMyUnits } = useContext(unitContext);
  const items = useMemo<Record<string, [Unit, number]>>(
    () => myUnits[type],
    [myUnits, type]
  );

  const changeUnitCount = (key: string, value: number) => {
    const updatedItems = { ...items };
    updatedItems[key][1] = value;
    setMyUnits((prev: myUnitsConfig) => ({ ...prev, [type]: updatedItems }));
  };

  const handleClickItem = (e, key: string, value: number) => {
    if (e.target !== e.currentTarget) return;
    changeUnitCount(key, value);
  };
  const handleInputChange = (e, key: string) => {
    const value = removeString(e.target.value);
    changeUnitCount(key, value);
  };

  return (
    <Container>
      <Title>{type}</Title>
      <List>
        {Object.entries(items).map(([key, value]) => (
          <Item
            key={key}
            onClick={(e) => handleClickItem(e, key, value[1] + 1)}
          >
            <span>{value[0].name}</span>
            <Count
              value={value[1]}
              onChange={(e) => handleInputChange(e, key)}
            />
          </Item>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.section`
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
`;
const Title = styled.h4`
  text-align: center;
  border-bottom: 1px solid gray;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 1px 10px;
  :last-child {
    border-bottom: none;
  }
  :hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
  :active {
    background-color: #dddddd;
  }
`;

const Count = styled.input`
  width: 2rem;
`;

export default Section;
