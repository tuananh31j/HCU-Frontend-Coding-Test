import { Button, Radio } from 'antd';
import { FilterDropdownProps } from 'antd/es/table/interface';

interface FilterDropProps extends FilterDropdownProps {
    reset: () => void;
    filterOptions: { label: string; value: string }[];
}
const FilterDrop: React.FC<FilterDropProps> = ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    reset,
    clearFilters,
    filterOptions,
}) => {
    const handleClear = (handleclearFilters: (() => void) | undefined) => {
        reset();
        if (handleclearFilters) {
            handleclearFilters();
        }
    };
    return (
        <div style={{ padding: 8 }}>
            <Radio.Group
                onChange={(e) => {
                    setSelectedKeys(e.target.value ? [e.target.value] : []);
                }}
                value={selectedKeys[0]}
            >
                {filterOptions.map((option) => (
                    <Radio key={option.value} value={option.value}>
                        {option.label}
                    </Radio>
                ))}
            </Radio.Group>
            <div style={{ marginTop: 8 }}>
                <Button
                    type='primary'
                    onClick={() => {
                        confirm();
                        setSelectedKeys(selectedKeys);
                    }}
                    style={{ marginRight: 8 }}
                >
                    Filter
                </Button>
                <Button onClick={() => handleClear(clearFilters)}>Reset</Button>
            </div>
        </div>
    );
};

export default FilterDrop;
