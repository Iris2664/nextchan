import { defineEventHandler } from 'h3';
import { Post } from '~/server/models/post.schema'; // Post モデルをインポート

export default defineEventHandler(async (event) => {
  try {
    const post = await Post.findById(event.context.params?.id).populate("parent");
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw createError({ statusCode: 500, message: 'Failed to fetch post' });
  }
});