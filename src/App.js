import React from 'react';
import './App.css';
import { Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

function App() {
  const data = [
    { title: "Onboarding Call", field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:"" },
    { title: "Google Search Console Access",  field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:""},
    { title: "Google Analytics Access", field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:"" },
    { title: "Website Access", field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:"" },
    { title: "Techincal Audit",  field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:""},
    { title: "Anchor Text and Semantic Analysis", field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:"" },
    { title: "Competitor Analysis", field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:"" },
    { title: "Anchor Text/ URL Mapping",  field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:""},
    { title: "Google Data Stuido Report + Local Reporting Suite", field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:"" },
    { title: "Site Level Optimization", field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:"" },
    { title: "On Page Optimization",  field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:""},
    { title: "Content Creation", field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:"" },
    { title: "Content Publising", field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:"" },
    { title: "Premium Press Release",  field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:""},
    { title: "Authority Niche Placements", field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:"" },
    { title: "Review Management", field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:"" },
    { title: "Index Links",  field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:""},
    { title: "Videos Recap", field1: "", field2: "" , field3:"" ,field4:"" ,field5:"",field6:"" },

    
  ];
  const [tableData, setTableData] = React.useState(data);
  

  const handleEdit = (title, field, value) => {
    // Update the state with the edited data
    setTableData(prevState =>
      prevState.map(item => {
        if (item.title === title) {
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  }


  return (
    <div className="App">
      <TableContainer>
        <Table variant="simple" size="sm" >
          <Thead>
            <Tr>
              <Th backgroundColor="gray.100">Month 1</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map(item => (
              <Tr key={item.title}>
                <Td backgroundColor="gray.100">{item.title}</Td>
                <Td>
                  <Input
                    type="text"
                    value={item.field1}
                    onChange={e => handleEdit(item.title, 'field1', e.target.value)}
                  />
                </Td>
                <Td>
                  <Input
                    type="text"
                    value={item.field2}
                    onChange={e => handleEdit(item.title, 'field2', e.target.value)}
                  />
                </Td>
                <Td>
                  <Input
                    type="text"
                    value={item.field3}
                    onChange={e => handleEdit(item.title, 'field3', e.target.value)}
                  />
                </Td>
                <Td>
                  <Input
                    type="text"
                    value={item.field4}
                    onChange={e => handleEdit(item.title, 'field4', e.target.value)}
                  />
                </Td>
                <Td>
                  <Input
                    type="text"
                    value={item.field5}
                    onChange={e => handleEdit(item.title, 'field5', e.target.value)}
                  />
                </Td>
                <Td>
                  <Input
                    type="text"
                    value={item.field6}
                    onChange={e => handleEdit(item.title, 'field6', e.target.value)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        </TableContainer>
    </div>
  );
}

export default App;
