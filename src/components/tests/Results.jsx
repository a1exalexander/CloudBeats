import React, { useState, useEffect, useMemo } from "react";
import { Button, Divider, Carousel, Popover } from "antd";
import { ReactComponent as IconLeft } from "../../assets/svg/Interface/Long arrow left.svg";
import { ReactComponent as IconFile } from "../../assets/svg/Interface/File 2.svg";
import { ReactComponent as IconReply } from "../../assets/svg/Interface/Reply.svg";
import { ReactComponent as IconLeftExpand } from "../../assets/svg/Interface/Expand left.svg";
import { ReactComponent as IconRightExpand } from "../../assets/svg/Interface/Expand right.svg";
import { ReactComponent as IconActions } from "../../assets/svg/Actions.svg";
import ResultTest from "./ResultTest";
import CloudBadge from "../common/CloudBadge";

const Results = () => {
  const [slider, setSlider] = useState(null);
  const [counter, setCounter] = useState(0);
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const list = [1, 2, 3].map(el => {
    return <ResultTest key={el} />;
  });

  const totalSlides = useMemo(() => list.length, [list]);

  useEffect(() => {
    if (totalSlides) setCounter(1);
  }, [totalSlides]);

  return (
    <div className="results">
      <div className="results__row">
        <div className="results__wrapper">
          <Button type="link" className="results__head-btn">
            <IconLeft className="results__icon" />
            Back
          </Button>
          <h3 className="results__title">Test #160914 - JUL 15, 15h30</h3>
          <CloudBadge>passed</CloudBadge>
        </div>
        <div className="results__wrapper">
          <Button type="link" className="results__head-btn">
            <IconReply className="results__icon" />
            Jira
          </Button>
          <Button type="link" className="results__head-btn">
            <IconFile className="results__icon" />
            XLS
          </Button>
          <Button
            type="link"
            className="results__head-btn results__head-btn--last"
          >
            <IconFile className="results__icon" />
            PDF
          </Button>
          <div className="results__carousel-nav">
            <Button
              type="link"
              className="results__arrow"
              onClick={() => slider.slick.slickPrev()}
            >
              <IconLeftExpand className="results__icon-nav" />
            </Button>
            <span className="results__slide-number">
              {counter} on {totalSlides}
            </span>
            <Button
              type="link"
              className="results__arrow results__arrow--last"
              onClick={() => slider.slick.slickNext()}
            >
              <IconRightExpand className="results__icon-nav" />
            </Button>
          </div>
          <Popover
            placement="leftTop"
            title={`Item 1`}
            content={content}
            trigger="hover"
          >
            <IconActions className="results__extra" />
          </Popover>
        </div>
      </div>
      <Divider />
      <Carousel
        afterChange={e => setCounter(e + 1)}
        ref={node => setSlider(node)}
        className="results__carousel"
      >
        {list}
      </Carousel>
    </div>
  );
};

export default Results;
