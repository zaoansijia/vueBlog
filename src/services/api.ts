const commonPrefix = 'http://localhost:80/api/blog';
export const api: { [key: string]: string } = {
  blogList: `${commonPrefix}/posts`,
  blogDetail: `${commonPrefix}/post/detail`,
};
