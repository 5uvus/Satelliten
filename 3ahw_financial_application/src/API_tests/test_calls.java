package API_tests;

import java.io.InputStreamReader;
import java.net.URL;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

public class test_calls {

	public static void main(String[] args) throws Exception {
		Gson gson = new Gson();
		URL url = new URL("https://api.tiingo.com/tiingo/daily/<ticker>/prices");
		InputStreamReader reader = new InputStreamReader(url.openStream());
		JsonObject o = gson.fromJson(reader, JsonElement.class).getAsJsonObject();
		System.out.println(o.toString());
		reader.close();


		

	}
}