import { myUnitsConfig, unitContext, UnitInfo } from "@src/pages";
import { UNIT_IMAGE_SIZE } from "@src/unit/constants";
import { removeString } from "@src/utils/validator";
import { useContext, useMemo } from "react";
import styled from "styled-components";

interface SectionProps {
  type: string;
}

const Section = ({ type }: SectionProps) => {
  const { myUnits, setMyUnits } = useContext(unitContext);
  const items = useMemo<Record<string, UnitInfo>>(
    () => myUnits[type],
    [myUnits, type]
  );

  console.table(myUnits[type]);

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
        {Object.entries(items).map(([key, value]) => {
          const [unit, count] = value;
          return (
            <Item key={key} onClick={(e) => handleClickItem(e, key, count + 1)}>
              <div>
                <Thumbnail src={unit.src} top={unit.top} left={unit.left} />
                <span>{unit.name}</span>
              </div>
              <div>
                <span>0%</span>
                <Count
                  value={count}
                  onChange={(e) => handleInputChange(e, key)}
                />
              </div>
            </Item>
          );
        })}
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
  > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

const Thumbnail = styled.div<{ src: string; top: number; left: number }>`
  background: ${({ src }) => `url(${src}) no-repeat`};
  width: ${UNIT_IMAGE_SIZE.WIDTH}px;
  height: ${UNIT_IMAGE_SIZE.HEIGHT}px;
  background-position: ${({ top, left }) => `${left}px`};
`;

const Count = styled.input`
  width: 2rem;
  text-align: right;
`;

export default Section;
