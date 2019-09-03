import axios from "axios";
import { notification } from "ant-design-vue";
//JSX的简单应用
function request(options) {
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      const {
        response: { status, statusText }
      } = error;
      notification.error({
        // eslint-disable-next-line no-unused-vars
        message: h => (
          <div>
            请求错误 <span style="color: red">{status}1</span> : {options.url}
          </div>
        ),
        description: statusText
      });
      return Promise.reject(error);
    });
}
export default request;
