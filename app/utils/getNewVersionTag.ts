/* eslint-disable @typescript-eslint/no-explicit-any */
// 版本检查功能已被禁用
// import axios from 'axios';

// const githubApiRepoTagsUrl =
//  'https://api.github.com/repos/pavlobu/deskreen/releases/latest';

export default async function getNewVersionTag() {
  // 版本检查功能已被禁用
  console.log('Version check functionality has been disabled.');
  return '';

  /*
  let latestVersionTag = '';

  const response = await axios({
    url: githubApiRepoTagsUrl,
    method: 'get',
    headers: { 'User-Agent': 'node.js' },
  });

  const tagName = response.data.tag_name;

  latestVersionTag = tagName.slice(1);

  return latestVersionTag;
  */
}
