/* eslint-disable react/prop-types */
import React from "react";
import "@apf/core/dist/style.css";
import "./FooterBrikOne.css";
import {Anchor, Text} from "@apf/core";
function FooterBrikOne(props){
    const liOne = props?.data?.data?.find(item => item?.content?.type === "link"  && item?.content?.for === "li one");
    const liTwo = props?.data?.data?.find(item => item?.content?.type === "link"  && item?.content?.for === "li two");
    const liThree = props?.data?.data?.find(item => item?.content?.type === "link"  && item?.content?.for === "li three");
    const liFour = props?.data?.data?.find(item => item?.content?.type === "link"  && item?.content?.for === "li four");
    const liFive = props?.data?.data?.find(item => item?.content?.type === "link"  && item?.content?.for === "li five"); 
    const text = props?.data?.data?.find(item => item?.content?.type === "subtext"  && item?.content?.for === "subtext");
    return(
        // <Grid>
        <div className="container-footer" style={{ backgroundColor: props?.data?.style?.backgroundColor ,color: props?.data?.style?.font?.color , fontWeight: props?.data?.style?.font?.weight , fontStyle: props?.data?.style?.font?.style, fontSize: props?.data?.style?.font?.size, fontFamily: props?.data?.style?.font?.family , height: props?.data?.style?.font?.height}}>
            <div className="list-container-parent">
                <ul className="list-container">
                {liOne && liOne?.display === "block" &&<li><Anchor href={liOne?.content?.link} target={liOne?.content?.target} underline="never" c={liOne?.style?.font?.color} fz={liOne?.style?.font?.size}  style={{ fontFamily: liOne?.style?.font?.family ,backgroundColor: liOne?.style?.backgroundColor}} fw={liOne?.style?.font?.weight} >{liOne?.content?.value}</Anchor></li>}
                {liTwo && liTwo?.display === "block" &&<li><Anchor href={liTwo?.content?.link} target={liTwo?.content?.target} underline="never" c={liTwo?.style?.font?.color} fz={liTwo?.style?.font?.size}  style={{ fontFamily: liTwo?.style?.font?.family ,backgroundColor: liTwo?.style?.backgroundColor}} fw={liTwo?.style?.font?.weight}>{liTwo?.content?.value}</Anchor></li>}
                {liThree && liThree?.display === "block" &&<li><Anchor href={liThree?.content?.link} target={liThree?.content?.target} underline="never" c={liThree?.style?.font?.color} fz={liThree?.style?.font?.size}  style={{ fontFamily: liThree?.style?.font?.family ,backgroundColor: liThree?.style?.backgroundColor}} fw={liThree?.style?.font?.weight}>{liThree?.content?.value}</Anchor></li>}
                {liFour && liFour?.display === "block" && <li><Anchor href={liFour?.content?.link} target={liFour?.content?.target} underline="never" c={liFour?.style?.font?.color} fz={liFour?.style?.font?.size}  style={{ fontFamily: liFour?.style?.font?.family ,backgroundColor: liFour?.style?.backgroundColor}} fw={liFour?.style?.font?.weight}>{liFour?.content?.value}</Anchor></li>}
                {liFive && liFive?.display === "block" &&<li><Anchor href={liFive?.content?.link} target={liFive?.content?.target} underline="never" c={liFive?.style?.font?.color} fz={liFive?.style?.font?.size}  style={{ fontFamily: liFive?.style?.font?.family ,backgroundColor: liFive?.style?.backgroundColor}} fw={liFive?.style?.font?.weight}>{liFive?.content?.value}</Anchor></li>}
                </ul>
            </div>
            
            {text && text?.display === "block" &&<Text c={text?.style?.font.color} fz={text?.style?.font?.size} style={{ fontFamily: text?.style?.font?.family ,backgroundColor: text?.style?.backgroundColor}} fs={text?.style?.font?.style} fw={text?.style?.font?.weight}  className="Brik-Container-text">{text?.content?.value}</Text>}
        </div>
        // </Grid>
    );
}
export default FooterBrikOne;