import { ArrowDown2, ArrowUp2, SearchNormal1 } from "iconsax-react";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
  Popover,
  paperClasses,
  type BoxProps,
  styled,
  type ButtonProps,
} from "@mui/material";
import { useMemo, useState } from "react";

type GenericTag<B> = B & {
  id: number;
  label: string;
};

type GenericOption<T> = T & {
  id: number;
  tag: number[];
  label: string;
};

interface Props<T, B> {
  tagsList: GenericTag<B>[];
  selectedOptions: number[];
  options: GenericOption<T>[];
  onSelectedOptionsChange: (selectedOptions: number[]) => void;
}

// Sample mock data for tagsList
const sampleTagsList: GenericTag<{ color: string }>[] = [
  { id: 1, label: "Important", color: "red" },
  { id: 2, label: "Work", color: "blue" },
  { id: 3, label: "Personal", color: "green" },
  { id: 4, label: "Urgent", color: "orange" },
];

// Sample mock data for options
const sampleOptions: GenericOption<{ description: string }>[] = [
  {
    id: 1,
    label: "Task 1",
    tag: [1, 2],
    description: "Complete project report",
  },
  { id: 2, label: "Task 2", tag: [2, 3], description: "Schedule team meeting" },
  { id: 3, label: "Task 3", tag: [1, 4], description: "Prepare presentation" },
  { id: 4, label: "Task 4", tag: [3], description: "Buy groceries" },
  { id: 5, label: "Task 5", tag: [2, 4], description: "Submit expense report" },
];

export const FilterableOptionList = <T, B>(props: Props<T, B>) => {
  const { options, tagsList, selectedOptions, onSelectedOptionsChange } = props;

  const popoverAnchorEl = usePopoverAnchorEl();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [internalSelectedOptions, setInternalSelectedOptions] = useState<
    number[]
  >(selectedOptions || []);

  const filteredOptions = useMemo(() => {
    return options.filter((option) => {
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tagId) => option.tag.includes(tagId));
      const matchesSearch = option.label
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesTags && matchesSearch;
    });
  }, [options, selectedTags, searchTerm]);

  const tagCounts = useMemo(() => {
    const counts: { [key: number]: number } = {};
    internalSelectedOptions.forEach((optionId) => {
      const option = options.find((opt) => opt.id === optionId);
      if (option) {
        option.tag.forEach((tagId) => {
          counts[tagId] = (counts[tagId] || 0) + 1;
        });
      }
    });
    return counts;
  }, [options, internalSelectedOptions]);

  const allFilteredSelected = useMemo(() => {
    return filteredOptions.every((option) =>
      internalSelectedOptions.includes(option.id)
    );
  }, [filteredOptions, internalSelectedOptions]);

  const handleTagToggle = (tagId: number) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  const handleOptionToggle = (optionId: number) => {
    setInternalSelectedOptions(
      internalSelectedOptions.includes(optionId)
        ? internalSelectedOptions.filter((id) => id !== optionId)
        : [...internalSelectedOptions, optionId]
    );
  };

  const handleToggleAll = () => {
    if (allFilteredSelected) {
      setInternalSelectedOptions(
        internalSelectedOptions.filter(
          (id) => !filteredOptions.some((option) => option.id === id)
        )
      );
    } else {
      const newSelectedOptions = [
        ...new Set([
          ...internalSelectedOptions,
          ...filteredOptions.map((option) => option.id),
        ]),
      ];
      setInternalSelectedOptions(newSelectedOptions);
    }
  };

  const handleCanceling = () => {
    popoverAnchorEl.closePopover();
    setTimeout(() => {
      setSearchTerm("");
      setSelectedTags([]);
      setInternalSelectedOptions(selectedOptions);
    }, 500);
  };

  const handleApplying = () => {
    popoverAnchorEl.closePopover();
    onSelectedOptionsChange(internalSelectedOptions);
  };

  return (
    <Paper sx={{ p: 4, display: "flex" }}>
      <PopoverFilters
        label="سرویس"
        {...popoverAnchorEl}
        active={selectedOptions.length > 0}
        value={getSelectedOptionsText(selectedOptions, options)}
      >
        <StyledPaper>
          <TagList>
            {tagsList.map((tag) => (
              <StyledChip
                key={tag.id}
                onClick={() => handleTagToggle(tag.id)}
                color={selectedTags.includes(tag.id) ? "primary" : "default"}
                label={
                  <LabelBox>
                    {tag.label}
                    {tagCounts[tag.id] && (
                      <CountBadge>{tagCounts[tag.id]}</CountBadge>
                    )}
                  </LabelBox>
                }
              />
            ))}
          </TagList>

          <TextField
            fullWidth
            sx={{ mb: 2 }}
            variant="outlined"
            value={searchTerm}
            placeholder="جستجو در سرویس‌ها"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchNormal1 />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {filteredOptions.length > 0 && (
            <Button
              fullWidth
              size="small"
              variant="text"
              onClick={handleToggleAll}
              sx={{ mb: 1.25, justifyContent: "start" }}
            >
              {allFilteredSelected
                ? ` رفع انتخاب ${filteredOptions.length} گزینۀ زیر${getTagsCount(selectedTags.length)}`
                : `انتخاب  ی ${filteredOptions.length} گزینۀ زیر ${getTagsCount(selectedTags.length)}`}
            </Button>
          )}

          <Divider />
          <StyledList>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <ListItem
                  key={option.id}
                  dense
                  button
                  onClick={() => handleOptionToggle(option.id)}
                >
                  <ListItemIcon sx={{ minWidth: "unset" }}>
                    <Checkbox
                      edge="start"
                      size="medium"
                      color="primary"
                      tabIndex={-1}
                      disableRipple
                      checked={internalSelectedOptions.includes(option.id)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={option.label} />
                </ListItem>
              ))
            ) : (
              <Typography variant="body2"> موردی یافت نشد.</Typography>
            )}
          </StyledList>
          <Divider />
          <ActionsBox>
            <Typography variant="caption">
              {getSelectedOptionsText(internalSelectedOptions, options)}
            </Typography>

            <Box display="flex">
              <Button variant="text" onClick={handleCanceling}>
                انصراف
              </Button>
              <Button variant="text" onClick={handleApplying}>
                اعمال
              </Button>
            </Box>
          </ActionsBox>
        </StyledPaper>
      </PopoverFilters>
    </Paper>
  );
};

const getTagsCount = (count: number) => (count > 0 ? `(${count} برچسب)` : "");

const getSelectedOptionsText = <T,>(
  selectedOptions: number[],
  options: GenericOption<T>[]
): string => {
  if (selectedOptions.length === options.length) {
    return "همه";
  } else if (selectedOptions.length === 1)
    return `${options.find((opt) => opt.id === selectedOptions[0])?.label}`;
  else if (selectedOptions.length > 1) return `${selectedOptions.length} گزینه`;
  return "";
};
const StyledPaper = styled(Paper)(() => ({
  maxWidth: 364,
  paddingBlock: 16,
  paddingInline: 12,
}));

const StyledList = styled(List)({
  height: 250,
  overflowY: "auto",
});

const TagList = styled(Box)(() => ({
  gap: 8,
  display: "flex",
  flexWrap: "wrap",
  marginBottom: 16,
}));

const CountBadge = styled("div")({
  width: 18,
  height: 18,
  font: "inherit",
  display: "grid",
  borderRadius: 50,
  placeItems: "center",
  backgroundColor: "white",
});

const StyledChip = styled(Chip)({
  paddingInline: "unset",
});

const LabelBox = styled("div")(() => ({
  gap: 4,
  display: "flex",
  alignItems: "center",
}));

const ActionsBox = styled("div")(() => ({
  paddingTop: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const usePopoverAnchorEl = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const openPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    openPopover,
    closePopover,
  };
};

interface PopoverFiltersProps
  extends ReturnType<typeof usePopoverAnchorEl>,
    BoxProps {
  value: string;
  active: boolean;
  label: React.ReactNode;
}

export const PopoverFilters: React.FC<
  React.PropsWithChildren<PopoverFiltersProps>
> = (props) => {
  const {
    label,
    value,
    active,
    children,
    anchorEl,
    closePopover,
    openPopover,
    ...boxProps
  } = props;

  const open = Boolean(anchorEl);

  return (
    <Box {...boxProps}>
      <FilterButton
        open={open}
        active={active}
        filterLabel={label}
        filterValue={value}
        onClick={openPopover}
      />

      <StyledPopover
        open={open}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {children}
      </StyledPopover>
    </Box>
  );
};

const StyledPopover = styled(Popover)(({ theme }) => ({
  marginTop: theme.spacing(0.5),

  [`& .${paperClasses.root}`]: {
    overflow: "visible",
    minWidth: "300px",
  },
}));

interface FilterButtonProps extends ButtonProps {
  open: boolean;
  active: boolean;
  filterValue?: string;
  filterLabel?: React.ReactNode;
}

export const FilterButton: React.FC<
  React.PropsWithChildren<FilterButtonProps>
> = (props) => {
  const { open, filterLabel, filterValue, children, active, ...buttonProps } =
    props;

  return (
    <StyledButton
      fullWidth
      size="small"
      disableElevation
      active={active}
      variant="contained"
      endIcon={open ? <ArrowUp2 size={16} /> : <ArrowDown2 size={16} />}
      {...buttonProps}
    >
      {children || (
        <>
          <span>{filterLabel}</span>
          <span>{filterValue && `: ${filterValue}`}</span>
        </>
      )}
    </StyledButton>
  );
};

const StyledButton = styled(Button)<{ active: boolean }>(
  ({ theme, active }) => ({
    fontSize: "12px",
    borderRadius: "6px",
    textTransform: "none",
    letterSpacing: "0.4px",
    color: active ? theme.palette.common.white : theme.palette.grey[500],
    backgroundColor: active ? theme.palette.primary[500] : "#EDF1F9",

    "&:hover": {
      backgroundColor: active
        ? theme.palette.primary[600]
        : theme.palette.grey[200],
    },
  })
);

