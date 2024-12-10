import HyperXML from "../../xsl/v1.xsl?type=raw";

export function GET() {
	return new Response(HyperXML, {
		headers: {
			"Content-Type": "application/xml",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "*",
			"Access-Control-Allow-Headers": "*",
		},
	});
}
