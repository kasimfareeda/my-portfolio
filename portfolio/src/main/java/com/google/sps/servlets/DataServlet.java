// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Date;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    ArrayList<String> strings = new ArrayList<String>();
    strings.add("Hello");
    strings.add("I");
    strings.add("am");
    strings.add("Fareeda");

    response.setContentType("application/json;");
    response.getWriter().println(convertToJson(strings));
  }

  private String convertToJson(ArrayList<String> strings) {
    String json = "{";
    json += "\"Name\": ";
    json += "\"" + strings.get(0) + "\"";
    json += ", ";
    json += "\"College\": ";
    json += "\"" + strings.get(1) + "\"";
    json += ", ";
    json += "\"Time\": ";
    json += "\"" + strings.get(2) + "\"";
    json += ", ";
    json += "\"Comment\": ";
    json += "\"" + strings.get(3) + "\"";
    json += "}";
    return json;
  }
}
