import { ArrowLeftOutlined } from "@ant-design/icons";
import { Divider, Drawer, Form } from "antd";
import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";

export function MultiSheetSelect<T extends ItemProps>({
  children,
  title,
  searchBar,
  items,
  drawerItems,
  renderItem,
  value,
  onChange,
  drawerTitle,
  maxPage = 2,
}: Props<T>) {
  const sheetContentRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const page = useRef(1);

  const handleSelect = (item: T) => {
    if (onChange) {
      onChange(item);
    }
    page.current = 1;
    setVisible(false);
  };

  return (
    <>
      {children({
        open: () => setVisible(true),
        close: () => setVisible(false),
        value: value,
      })}
      {createPortal(
        <Sheet
          title={title}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          mask
          handler={false}
          swipeToClose
          unmountOnClose
          style={{ background: "#F7F8FA", paddingTop: "10px" }}
          height={"70%"}
        >
          <div className="flex size-full flex-col" ref={sheetContentRef}>
            {searchBar ? (
              <div className="px-3">
                <Form.Item className="m-0">{searchBar}</Form.Item>
              </div>
            ) : null}
            <div className="mt-3 max-h-[85%] overflow-auto px-3">
              {items.map((item, index) => (
                <React.Fragment key={index}>
                  <ChildrenItem
                    item={item}
                    onClick={handleSelect}
                    containerRef={sheetContentRef}
                    render={renderItem}
                    drawerTitle={drawerTitle || title}
                    page={page}
                    maxPage={maxPage}
                    drawerItems={drawerItems}
                  />
                  {index < items.length - 1 ? (
                    <Divider className="my-0" />
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
}

function ChildrenItem<T extends ItemProps>({
  item,
  containerRef,
  onClick,
  render,
  drawerTitle,
  page,
  drawerItems,
  maxPage,
}: ChildItemProps<T>) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (page.current < maxPage && drawerItems) {
      setOpen(true);
      page.current++;
    } else {
      if (onClick) {
        onClick(item);
      }
    }
  };

  return (
    <div>
      <div className="cursor-pointer py-3" onClick={handleClick}>
        {render ? render(item) : item.name}
      </div>
      {drawerItems ? (
        <ChildrenDrawer
          title={
            <div className="pointer-events-none absolute inset-0 pt-[17px] text-center text-xl">
              {drawerTitle}
            </div>
          }
          items={drawerItems}
          parentItem={item}
          open={open}
          setOpen={setOpen}
          containerRef={containerRef}
          itemOnClick={onClick}
          itemRender={render}
          page={page}
          maxPage={maxPage}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

function ChildrenDrawer<T extends ItemProps>({
  title,
  items,
  open,
  setOpen,
  containerRef,
  itemOnClick,
  itemRender,
  parentItem,
  page,
  maxPage,
}: DrawerProps<T>) {
  const onClose = () => {
    setOpen(false);
    page.current--;
  };

  return (
    <Drawer
      title={title}
      placement="right"
      closeIcon={<ArrowLeftOutlined />}
      onClose={onClose}
      open={open}
      getContainer={containerRef?.current || false}
      destroyOnClose
      width="100%"
      className="!bg-surface2"
      styles={{
        header: { borderBottom: "none", paddingBottom: 0, paddingTop: "20px" },
      }}
    >
      <div className="mb-2 text-lg text-gray5">{parentItem.name}</div>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChildrenItem
            item={item}
            containerRef={containerRef}
            onClick={itemOnClick}
            render={itemRender}
            page={page}
            drawerItems={items}
            maxPage={maxPage}
          />
          {index < items.length - 1 ? <Divider className="my-0" /> : null}
        </React.Fragment>
      ))}
    </Drawer>
  );
}

type Props<T> = {
  title?: string;
  drawerTitle?: string;
  children: (methods: {
    open: () => void;
    close: () => void;
    value: any;
  }) => React.ReactNode;
  items: T[];
  drawerItems?: T[];
  renderItem: (item: T) => React.ReactNode;
  searchBar?: React.ReactNode;
  value?: any;
  onChange?: any;
  maxPage?: number;
};

type ItemProps = {
  name?: React.ReactNode;
  children?: ItemProps[];
};

type ChildItemProps<T extends ItemProps> = {
  drawerTitle?: string;
  item: T;
  drawerItems?: T[];
  onClick?: Function;
  containerRef?: React.RefObject<HTMLDivElement>;
  render?: (item: T) => React.ReactNode;
  page: React.MutableRefObject<number>;
  maxPage: number;
};

type DrawerProps<T extends ItemProps> = {
  title?: React.ReactNode;
  items: T[];
  parentItem: T;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  containerRef?: React.RefObject<HTMLDivElement>;
  itemOnClick?: Function;
  itemRender?: (item: T) => React.ReactNode;
  page: React.MutableRefObject<number>;
  maxPage: number;
};
