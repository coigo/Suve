import { createReadStream } from "node:fs";
import type { Response } from "express";
import { minioClient } from "../infra/minio/micioClient";

type props = {
  id: string;
};

interface videosStreamProps {
  find(video_id: string): Promise<string | null | undefined>;
}

type stream = Response;

export default class WatchService {
  constructor(stream: stream, repository: videosStreamProps) {
    this.stream = stream;
    this.repository = repository;
  }

  private stream: stream;
  private repository: videosStreamProps;

  public async startStreaming(video_id: string) {
    try {
      const video = await minioClient.getObject("suve", video_id);
      return video;
    } catch (err) {
      throw err;
    }
  }
}
