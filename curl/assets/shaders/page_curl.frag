{
  "sksl": "// This SkSL shader is autogenerated by spirv-cross.\n\nfloat4 flutter_FragCoord;\n\nuniform vec2 resolution;\nuniform float pointer;\nuniform float origin;\nuniform vec4 container;\nuniform float cornerRadius;\nuniform shader image;\nuniform half2 image_size;\n\nvec4 fragColor;\n\nvec2 FLT_flutter_local_FlutterFragCoord()\n{\n    return flutter_FragCoord.xy;\n}\n\nbool FLT_flutter_local_inRect(vec2 p, vec4 rct)\n{\n    bool _227 = p.x > rct.x;\n    bool _235;\n    if (_227)\n    {\n        _235 = p.x < rct.z;\n    }\n    else\n    {\n        _235 = _227;\n    }\n    bool _243;\n    if (_235)\n    {\n        _243 = p.y > rct.y;\n    }\n    else\n    {\n        _243 = _235;\n    }\n    bool _252;\n    if (_243)\n    {\n        _252 = p.y < rct.w;\n    }\n    else\n    {\n        _252 = _243;\n    }\n    bool inRct = _252;\n    if (!inRct)\n    {\n        return false;\n    }\n    bool _267 = p.x < (rct.x + cornerRadius);\n    bool _277;\n    if (_267)\n    {\n        _277 = p.y < (rct.y + cornerRadius);\n    }\n    else\n    {\n        _277 = _267;\n    }\n    if (_277)\n    {\n        return length(p - vec2(rct.x + cornerRadius, rct.y + cornerRadius)) < cornerRadius;\n    }\n    bool _301 = p.x > (rct.z - cornerRadius);\n    bool _311;\n    if (_301)\n    {\n        _311 = p.y < (rct.y + cornerRadius);\n    }\n    else\n    {\n        _311 = _301;\n    }\n    if (_311)\n    {\n        return length(p - vec2(rct.z - cornerRadius, rct.y + cornerRadius)) < cornerRadius;\n    }\n    bool _335 = p.x < (rct.x + cornerRadius);\n    bool _345;\n    if (_335)\n    {\n        _345 = p.y > (rct.w - cornerRadius);\n    }\n    else\n    {\n        _345 = _335;\n    }\n    if (_345)\n    {\n        return length(p - vec2(rct.x + cornerRadius, rct.w - cornerRadius)) < cornerRadius;\n    }\n    bool _369 = p.x > (rct.z - cornerRadius);\n    bool _379;\n    if (_369)\n    {\n        _379 = p.y > (rct.w - cornerRadius);\n    }\n    else\n    {\n        _379 = _369;\n    }\n    if (_379)\n    {\n        return length(p - vec2(rct.z - cornerRadius, rct.w - cornerRadius)) < cornerRadius;\n    }\n    return true;\n}\n\nmat3 FLT_flutter_local_translate(vec2 p)\n{\n    return mat3(vec3(1.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0), vec3(p.x, p.y, 1.0));\n}\n\nmat3 FLT_flutter_local_scale(vec2 s, vec2 p)\n{\n    vec2 param = p;\n    vec2 param_1 = -p;\n    return (FLT_flutter_local_translate(param) * mat3(vec3(s.x, 0.0, 0.0), vec3(0.0, s.y, 0.0), vec3(0.0, 0.0, 1.0))) * FLT_flutter_local_translate(param_1);\n}\n\nmat3 FLT_flutter_local_inverse(mat3 m)\n{\n    float a00 = m[0].x;\n    float a01 = m[0].y;\n    float a02 = m[0].z;\n    float a10 = m[1].x;\n    float a11 = m[1].y;\n    float a12 = m[1].z;\n    float a20 = m[2].x;\n    float a21 = m[2].y;\n    float a22 = m[2].z;\n    float b01 = (a22 * a11) - (a12 * a21);\n    float b11 = ((-a22) * a10) + (a12 * a20);\n    float b21 = (a21 * a10) - (a11 * a20);\n    float det = ((a00 * b01) + (a01 * b11)) + (a02 * b21);\n    return mat3(vec3(b01, ((-a22) * a01) + (a02 * a21), (a12 * a01) - (a02 * a11)), vec3(b11, (a22 * a00) - (a02 * a20), ((-a12) * a00) + (a02 * a10)), vec3(b21, ((-a21) * a00) + (a01 * a20), (a11 * a00) - (a01 * a10))) * (1.0 / det);\n}\n\nvec2 FLT_flutter_local_project(vec2 p, mat3 m)\n{\n    mat3 param = m;\n    return (FLT_flutter_local_inverse(param) * vec3(p, 1.0)).xy;\n}\n\nvoid FLT_main()\n{\n    vec2 xy = FLT_flutter_local_FlutterFragCoord();\n    vec2 center = resolution * 0.5;\n    float dx = origin - pointer;\n    float x = container.z - dx;\n    float d = xy.x - x;\n    if (d > 150.0)\n    {\n        fragColor = vec4(0.0);\n        vec2 param_1 = xy;\n        vec4 param_2 = container;\n        if (FLT_flutter_local_inRect(param_1, param_2))\n        {\n            fragColor.w = mix(0.5, 0.0, (d - 150.0) / 150.0);\n        }\n    }\n    else\n    {\n        if (d > 0.0)\n        {\n            float theta = asin(d / 150.0);\n            float d1 = theta * 150.0;\n            float d2 = (3.1415927410125732421875 - theta) * 150.0;\n            vec2 s = vec2(1.0 + ((1.0 - sin(1.57079637050628662109375 + theta)) * 0.100000001490116119384765625));\n            vec2 param_3 = s;\n            vec2 param_4 = center;\n            mat3 transform = FLT_flutter_local_scale(param_3, param_4);\n            vec2 param_5 = xy;\n            mat3 param_6 = transform;\n            vec2 uv = FLT_flutter_local_project(param_5, param_6);\n            vec2 p1 = vec2(x + d1, uv.y);\n            s = vec2(1.10000002384185791015625 + (sin(1.57079637050628662109375 + theta) * 0.100000001490116119384765625));\n            vec2 param_7 = s;\n            vec2 param_8 = center;\n            transform = FLT_flutter_local_scale(param_7, param_8);\n            vec2 param_9 = xy;\n            mat3 param_10 = transform;\n            uv = FLT_flutter_local_project(param_9, param_10);\n            vec2 p2 = vec2(x + d2, uv.y);\n            vec2 param_11 = p2;\n            vec4 param_12 = container;\n            if (FLT_flutter_local_inRect(param_11, param_12))\n            {\n                fragColor = image.eval(image_size *  p2 / resolution);\n            }\n            else\n            {\n                vec2 param_13 = p1;\n                vec4 param_14 = container;\n                if (FLT_flutter_local_inRect(param_13, param_14))\n                {\n                    fragColor = image.eval(image_size *  p1 / resolution);\n                    vec4 _552 = fragColor;\n                    vec3 _554 = _552.xyz * pow(clamp((150.0 - d) / 150.0, 0.0, 1.0), 0.20000000298023223876953125);\n                    fragColor.x = _554.x;\n                    fragColor.y = _554.y;\n                    fragColor.z = _554.z;\n                }\n                else\n                {\n                    vec2 param_15 = xy;\n                    vec4 param_16 = container;\n                    if (FLT_flutter_local_inRect(param_15, param_16))\n                    {\n                        fragColor = vec4(0.0, 0.0, 0.0, 0.5);\n                    }\n                }\n            }\n        }\n        else\n        {\n            vec2 s_1 = vec2(1.2000000476837158203125);\n            vec2 param_17 = s_1;\n            vec2 param_18 = center;\n            mat3 transform_1 = FLT_flutter_local_scale(param_17, param_18);\n            vec2 param_19 = xy;\n            mat3 param_20 = transform_1;\n            vec2 uv_1 = FLT_flutter_local_project(param_19, param_20);\n            vec2 p_1 = vec2((x + abs(d)) + 471.2388916015625, uv_1.y);\n            vec2 param_21 = p_1;\n            vec4 param_22 = container;\n            if (FLT_flutter_local_inRect(param_21, param_22))\n            {\n                fragColor = image.eval(image_size *  p_1 / resolution);\n            }\n            else\n            {\n                fragColor = image.eval(image_size *  xy / resolution);\n            }\n        }\n    }\n}\n\nhalf4 main(float2 iFragCoord)\n{\n      flutter_FragCoord = float4(iFragCoord, 0, 0);\n      FLT_main();\n      return fragColor;\n}\n",
  "stage": 1,
  "target_platform": 2,
  "uniforms": [
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 0,
      "name": "resolution",
      "rows": 2,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 1,
      "name": "pointer",
      "rows": 1,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 2,
      "name": "origin",
      "rows": 1,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 3,
      "name": "container",
      "rows": 4,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 4,
      "name": "cornerRadius",
      "rows": 1,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 0,
      "columns": 1,
      "location": 5,
      "name": "image",
      "rows": 1,
      "type": 12
    }
  ]
}