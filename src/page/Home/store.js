import axios from 'axios';
import {observable, action}  from 'mobx';
export default class Store {

  @observable refreshData = 0;

  fileList = [];
  preImgList = [];

  beforUpload = (file) => {
    console.log(file)
    this.fileList.push(file);
    return false;
  }

  upload = async() => {
    const formData = new FormData();
    this.fileList.forEach((file, index) => {
      formData.append('file' + (index || ''), file)
    })

    const res = await axios.post('http://zilongshijia.top:1088/upload', formData, );
    console.log(res);
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