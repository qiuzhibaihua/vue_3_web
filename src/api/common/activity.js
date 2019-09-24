import request from '@/util/request';

// demo
export function getPropertyList(data) {
    return request({
        url: '/compass-modeling/property/list',
        method: 'post',
        data
    }).then(response => response.data.data);
}