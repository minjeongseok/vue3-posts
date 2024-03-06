import { posts } from '.';

export function getPosts(params) {
	return posts.get('/', { params });
}

export function getPostById(id) {
	return posts.get(`${id}`);
}

export function createPost(data) {
	return posts.post('', data);
}

export function updatePost(id, data) {
	// return posts.put(`${id}`, data); // put 메서드는 전체 데이터를 수정한다. 아래와 같이 patch 메서드를 활용해서 등록일이 사라지지 않도록 한다.
	return posts.put(`${id}`, data);
}

export function deletePost(id) {
	return posts.delete(`/${id}`);
}
