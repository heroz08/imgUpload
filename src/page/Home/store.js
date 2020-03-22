import axios from 'axios';
import {observable, action}  from 'mobx';
export default class Store {
  constructor(){
    this.uploadPorps.beforeUpload = this.beforUpload;
    this.uploadPorps.onRemove = this.remove;
  }

  @observable refreshData = 0;

  fileList = [];
  preImgList = [];

  uploadPorps = {
    beforeUpload: null,
    listType: "picture-card",
    multiple: true,
    accept: ".JPG, .PNG, .GIF, .JEPG",
    onRemove: null,
  }

  beforUpload = (file) => {
    this.fileList = [...this.fileList, file];
    return false;
  }

  remove = (file) => {
    const index = this.fileList.indexOf(file.originFileObj);
    const tempList = this.fileList.slice();
    tempList.splice(index, 1);
    this.setData({
      fileList: tempList
    })
  }

  upload = async() => {
    const formData = new FormData();
    this.fileList.forEach((file, index) => {
      formData.append('file' + (index || ''), file)
    })

    const res = await axios.post('http://zilongshijia.top:1088/upload', formData, );
    const {data = []} = res.data;
    this.setData({
      preImgList: data
    })
  }  

  @action setData = (data) => {
    Object.keys(data).forEach(key => {
      this[key] = data[key];
    })
    this.refreshData = this.refreshData + 1
  }
}