import React, { useEffect, useState } from 'react';
import {
  DatePicker, Col, Row, Typography, Card, Input,
} from 'antd';
import { CheckCircleFilled, CloseCircleFilled, SearchOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import DataTable from './components/DataTable';
import testCampaigns from './testData';

const { RangePicker } = DatePicker;

function ActiveRenderer(props) {
  const { data } = props;

  const { startDate, endDate } = data;

  if (dayjs() > dayjs(startDate) && dayjs() < dayjs(endDate)) {
    return (
      <div>
        <CheckCircleFilled style={{ color: 'green' }} />
        &nbsp;Active
      </div>
    );
  }

  return (
    (
      <div>
        <CloseCircleFilled style={{ color: 'red' }} />
        &nbsp;Not Active
      </div>
    )
  );
}

function App() {
  const [searchValue, setSearchValue] = useState([]);
  const [range, setRange] = useState([]);
  const [campaigns, setCampaigns] = useState(testCampaigns);
  const [filteredDateCampaigns, setFilteredDateCampaigns] = useState(campaigns);
  const [filteredNameCampaigns, setFilteredNameCampaigns] = useState(filteredDateCampaigns);

  useEffect(() => {
    window.AddCampaigns = (newCampaigns) => {
      setCampaigns((prevCampaigns) => [...prevCampaigns, ...newCampaigns]);
    };
  }, []);

  useEffect(() => {
    if (Array.isArray(range) && range.length === 2) {
      const start = range[0];
      const end = range[1];

      setFilteredDateCampaigns(campaigns.filter((campaign) => (dayjs(campaign.startDate) > start
              && dayjs(campaign.startDate) < end)
          || (dayjs(campaign.endDate) > start && dayjs(campaign.endDate) < end)));
    } else {
      setFilteredDateCampaigns(campaigns);
    }
  }, [range, campaigns]);

  useEffect(() => {
    setFilteredNameCampaigns(
      filteredDateCampaigns.filter((c) => c.name.toLowerCase().includes(searchValue)),
    );
  }, [filteredDateCampaigns, searchValue]);

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const columnDefs = [
    {
      headerName: 'Name',
      field: 'name',
      filter: true,
      flex: 1,
    },
    {
      headerName: 'Active',
      cellRenderer: ActiveRenderer,
      flex: 1,

    },
    {
      headerName: 'Start Date',
      valueFormatter: (params) => dayjs(params.data.startDate).format('DD/MM/YYYY'),
      flex: 1,

    },
    {
      headerName: 'End Date',
      valueFormatter: (params) => dayjs(params.data.endDate).format('DD/MM/YYYY'),
      flex: 1,

    },
    {
      headerName: 'Budget',
      field: 'Budget',
      flex: 1,

      valueFormatter: (params) => {
        const value = params.data.Budget.toFixed(0);
        const formatted = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return `$${formatted}`;
      },
    },
  ];

  return (
    <div className="App">
      <Row>
        <Col span={24}>
          <Row justify="center">
            <Card title="Campaigns" style={{ width: 900 }}>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    <Col>
                      <Row align="middle">
                        <Col>
                          <Typography.Text>Filter results:&nbsp;</Typography.Text>
                        </Col>
                        <Col>
                          <RangePicker
                            onChange={(dates) => setRange(dates)}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Input
                        prefix={<SearchOutlined />}
                        onChange={onSearch}
                        placeholder="Search"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <DataTable
                    columnDefs={columnDefs}
                    rowData={filteredNameCampaigns}
                    style={{ height: 600 }}
                    pagination
                  />
                </Col>
              </Row>
            </Card>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
