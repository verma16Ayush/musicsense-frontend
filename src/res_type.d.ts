interface IResType {
  file_sha1: string;
  fingerprinted_confidence: string;
  fingerprinted_hashes_in_db: number;
  hashes_matched_in_input: number;
  input_confidence: number;
  input_total_hashes: number;
  offset: number;
  offset_seconds: number;
  song_id: number;
  song_name: string;
}