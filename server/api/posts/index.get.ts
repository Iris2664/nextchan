import { defineEventHandler } from 'h3';
import { Post } from '~/server/models/post.schema'; // Post モデルをインポート

export default defineEventHandler(async (event) => {
  try {
    const posts = await Post.find().populate("parent");
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw createError({ statusCode: 500, message: 'Failed to fetch posts' });
  }
});