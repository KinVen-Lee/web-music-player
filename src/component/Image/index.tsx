import React from 'react';
import { Image as AntdImage } from 'antd';

interface ImageProps {
    className?: string;
    style?: React.CSSProperties;
    picUrl?: string
}


function Image(props: ImageProps) {

    return (
        <AntdImage
            width={200}
            src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?`}
            placeholder={
                <AntdImage
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                    width={200}
                />
            }
        />

    );
}
export default Image
