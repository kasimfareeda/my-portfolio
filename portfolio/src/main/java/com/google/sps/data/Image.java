package com.google.sps.data;

/** A single comment*/
public final class Image {

  private final String imageURL;

  public Image(String imageURL) {
    this.imageURL = imageURL;
  }

  public Image() {
      this(null);
  }
}