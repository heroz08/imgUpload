import React, {Component} from 'react';
import { Upload, Button, Input, message } from 'antd';
import {UploadOutlined} from '@ant-design/icons'
import { observer } from 'mobx-react';
import Store from './store';
import './index.less';


@observer export default class Home extends Component {
  constructor(props) {
    super(props);
    this.store = new Store()
  }

  copyLink = (e) => {
    const input = e.target.parentNode.querySelector('input');
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      message.success('复制成功')
    }
  }

  render() {
    console.log(this.store)
    return (
      <div className="page-wrap" freshData={this.store.refreshData}>
        <div>
          <div className="upload-wrap">
          <Upload {...this.store.uploadPorps}>
          <UploadOutlined />
          {/* <Button type="ghost"><UploadOutlined /></Button> */}
        </Upload>
        </div>
        <Button type="primary" onClick={this.store.upload} className="upload-button">上传</Button>
        </div>
        <div className="preList-wrap">
          {
            this.store.preImgList.map(item => {
            return (
              <div>
                <img src={item.url}/>
                <span className="input-wrap"><Input type="text" value={item.url}/></span>
                <Button type="primary" onClick={(event) => this.copyLink(event)}>复制</Button>
              </div>)
            })
          }
        </div>
      </div>
    );
  }
}